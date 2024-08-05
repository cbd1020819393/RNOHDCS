import { Block, Slider } from 'galio-framework';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TestCase, Tester } from '@rnoh/testerino';

const SliderDemo = () => {
    const [result, setReault] = useState('')
    const handleValueChange = () => {
        setReault('change value');
    };

    const handleSlidingStart = () => {
        setReault('Sliding started');
    };

    const handleSlidingComplete = () => {
        setReault('Sliding completed')
    };

    const SliderProps = [
        { activeColor: 'red' },
        { activeColor: 'blue' },
        { value: 0 },
        { value: 10 },
        { disabled: true },
        { disabled: false },
        { minimumValue: 15, value: 20 },
        { minimumValue: 10, value: 20 },
        { maximumValue: 50, value: 10 },
        { maximumValue: 60, value: 20 },
        { trackStyle: { backgroundColor: 'pink', opacity: 0.4 } },
        { trackStyle: { backgroundColor: 'blue', opacity: 0.4 } },
        { thumbStyle: { backgroundColor: 'blue', opacity: 0.4 } },
        { thumbStyle: { backgroundColor: 'skyblue', opacity: 0 } },
        { step: 10 },
        { step: 20 }
    ]
    return (
        <ScrollView style={{ backgroundColor: "#fff" }} stickyHeaderIndices={[0]}>
            <View style={styles.inputArea}>
                <Text style={styles.baseText}>
                    {result}
                </Text>
            </View>
            <Tester>
                {
                    SliderProps.map((item) => {
                        return (
                            <TestCase itShould={JSON.stringify(item)} tags={['C_API']} key={JSON.stringify(item)}>
                                <Block style={{
                                    height: 'auto',
                                    display: 'flex',
                                }}>
                                    <Slider {...item}></Slider>
                                </Block>
                            </TestCase>
                        )
                    })
                }
                <TestCase itShould='onSlidingStart: 开始滑动'>
                    <Slider
                        value={0}
                        onSlidingStart={handleSlidingStart}
                    />
                </TestCase>
                <TestCase itShould='onSlidingComplete: 滑动完成'>
                    <Slider
                        value={0}
                        onSlidingComplete={handleSlidingComplete}
                    />
                </TestCase>
                <TestCase itShould='onValueChange: 滑动值改变触发'>
                    <Slider
                        value={0}
                        onValueChange={handleValueChange}
                    />
                </TestCase>
            </Tester>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    accordion: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    listStyle: {
        borderTopWidth: 10,
        borderTopColor: 'red',
    },
    headerStyle: {
        backgroundColor: '#5E72E4',
        padding: 10,
    },
    contentStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    inputArea: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 20
    },
    baseText: {
        width: '100%',
        height: "auto",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    checkboxStyle: {
        color: 'pink'
    },
    imageStyle: {
        backgroundColor: "red"
    },
    labelStyle: {
        color: 'red'
    },
    focusedCard: {
        transform: [{ scale: 0.5 }],
    },
    nextCard: {
        transform: [{ scale: 1.4 }],
    },
});
export default SliderDemo