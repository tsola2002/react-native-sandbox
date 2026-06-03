import React, { useEffect, useState } from 'react'
import { RefreshControl, StyleSheet, View, Text, FlatList, ActivityIndicator, Image, TextInput } from 'react-native';

const CountriesScreen = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");

    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3");
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
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
    },[]);

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
                showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f7fa",
        paddingHorizontal: 15,
        paddingTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },
    searchInput: {
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginBottom: 15,
        elevation: 2,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginBottom: 12,
        borderRadius: 12,
        overflow: "hidden",
        elevation: 3,
    },
    flag: {
        width: 120,
        height: 100,
    },
    details: {
        flex: 1,
        padding: 12,
        justifyContent: "center",
    },
    countryName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },
    info: {
        color: "#555",
        marginBottom: 2,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CountriesScreen