import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { TextInput } from 'react-native-web';
import { RefreshControl } from 'react-native';

const CountriesScreen = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");

    const fetchCountries = async () => {
        try {
            const response = fetch("https://restCountries.com/v3.1/all");
            const data = await response.json();
            const sortedCountries = data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
            setCountries(sortedCountries);
            setFilteredCountries(sortedCountries);
        } catch (error) {
            console.error("Error fetching countries:", error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }   
    };

    useEffect(() => {
        fetchCountries();
    });

    const handleSearch = (text) => {
        setSearch(text);

        const filtered = countries.filter((country) =>
            country.name.common
                .toLowerCase()
                .includes(text.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchCountries();
    };

    const renderCountry = ({ item }) => (
        <View style={styles.card}>
            <Image
                source={{ uri: item.flags.png }}
                style={styles.flag}
            />
            <View style={styles.details}>
                <Text style={styles.countryName}>
                    {item.name.common}
                </Text>

                <Text style={styles.info}>
                    Capital: {item.capital ? item.capital[0] : "N/A"}
                </Text>

                <Text style={styles.info}>
                    Population: {item.population.toLocaleString()}
                </Text>

                <Text style={styles.info}>
                    Region: {item.region}
                </Text>
            </View>
        </View>
    );

    if (loading) { 
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" />
                <Text>Loading countries...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Countries of the World
            </Text>

            <TextInput
                placeholder="Search country..."
                value={search}
                onChangeText={handleSearch}
                style={styles.searchInput}
            />

            <FlatList
                data={filteredCountries}
                keyExtractor={(item) => item.cca3}
                renderItem={renderCountry}
                showVerticalScrollIndicator={false}
                refreshControl={ 
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
}

export default CountriesScreen