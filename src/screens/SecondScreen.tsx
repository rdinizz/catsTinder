import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RTNCalculadora from 'rtn-calculadora/js/NativeCalculadora';

const SecondScreen: () => JSX.Element = () => {
  const [result, setResult] = useState<number | null>(null);
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<'+' | '-' | '*' | '/'>(
    '+',
  );

  const calculate = async () => {
    let value = 0;
    switch (currentOperator) {
      case '+':
        value = await RTNCalculadora?.add(firstValue, secondValue);
        break;
      case '-':
        value = await RTNCalculadora?.subtract(firstValue, secondValue);
        break;
      case '*':
        value = await RTNCalculadora?.multiply(firstValue, secondValue);
        break;
      case '/':
        value = await RTNCalculadora?.divide(firstValue, secondValue);
        break;
      default:
        break;
    }
    setResult(value ?? null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.headerText}>
        Example of Turbo Module using new RN arch
      </Text>
      <Text style={styles.headerText}>
        The logic is processed by native code
      </Text>
      <View style={styles.inputsView}>
        <TextInput
          style={styles.valuesInput}
          value={firstValue}
          onChangeText={value => setFirstValue(Number(value))}
          keyboardType="numeric"
          textAlign="center"
        />
        <Text style={styles.currentOperator}>{currentOperator}</Text>
        <TextInput
          style={styles.valuesInput}
          value={secondValue}
          onChangeText={value => setSecondValue(Number(value))}
          textAlign="center"
          keyboardType="numeric"
        />
        <Text style={styles.currentOperator}>=</Text>
        <Text style={styles.currentOperator}>{result}</Text>
      </View>
      <View style={styles.inputsView}>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={async () => {
            setCurrentOperator('+');
          }}>
          <Text style={styles.currentOperator}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={async () => {
            setCurrentOperator('-');
          }}>
          <Text style={styles.currentOperator}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={async () => {
            setCurrentOperator('*');
          }}>
          <Text style={styles.currentOperator}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={async () => {
            setCurrentOperator('/');
          }}>
          <Text style={styles.currentOperator}>/</Text>
        </TouchableOpacity>
      </View>
      <Button title="Compute" onPress={calculate} />
    </SafeAreaView>
  );
};
export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  valuesInput: {
    width: 60,
    height: 30,
    borderRadius: 12,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentOperator: {
    textAlignVertical: 'center',
    fontSize: 18,
    marginHorizontal: 10,
  },
  operatorButton: {
    width: 40,
    height: 30,
    borderRadius: 12,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  headerText: {
    alignSelf: 'center',
  },
});
