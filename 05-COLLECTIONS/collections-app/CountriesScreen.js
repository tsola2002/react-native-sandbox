import { View, Text } from 'react-native'
import React from 'react'

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


  return (
    <View>
      <Text>CountriesScreen</Text>
    </View>
  )
}

export default CountriesScreen