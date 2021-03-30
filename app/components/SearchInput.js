import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Picker} from '@react-native-picker/picker';

const SearchInput = ({onSubmit}) => {
  const [selectedValue, setSelectedValue] = useState('Habana');

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => {
          setSelectedValue(itemValue);
          onSubmit(itemValue);
        }}>
        <Picker.Item label="Pinar del Río" value="Pinar%20Del%20Rio" />
        <Picker.Item label="Artemisa" value="Artemisa" />
        <Picker.Item label="La Habana" value="Habana" />
        <Picker.Item label="Nueva Gerona" value="Nueva%20Gerona" />
        <Picker.Item label="San José" value="Mayabeque" />
        <Picker.Item label="Matanzas" value="Matanzas" />
        <Picker.Item label="Cienfuegos" value="Cienfuegos" />
        <Picker.Item label="Santa Clara" value="Santa%20Clara" />
        <Picker.Item label="Sancti Spiritus" value="Sancti%20Spiritus" />
        <Picker.Item label="Ciego de Ávila" value="Ciego%20de%20Avila" />
        <Picker.Item label="Camagüey" value="Camaguey" />
        <Picker.Item label="Las Tunas" value="Las%20Tunas" />
        <Picker.Item label="Holguín" value="Holguin" />
        <Picker.Item label="Bayamo" value="Bayamo" />
        <Picker.Item label="Santiago de Cuba" value="Santiago%20de%20cuba" />
        <Picker.Item label="Guantánamo" value="Guantanamo" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};

export default SearchInput;
