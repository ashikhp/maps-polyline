import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MultiplePointsMap = () => {
    const points = [
        { title: '1', coordinate: { latitude: 11.5550, longitude: 76.1349 } },
        { title: '2', coordinate: { latitude: 11.5404, longitude: 76.1204 } },
        { title: '3', coordinate: { latitude: 11.6025, longitude: 76.1325 } },
        // Add more points as needed
    ];

    const coordinates = points.map(point => point.coordinate);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 11.5550,
                    longitude: 76.1349,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                {points.map((point, index) => (
                    <Marker
                        key={point.id}
                        coordinate={point.coordinate}
                        title={point.title}
                    >
                        <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 10, borderColor: 'black', borderWidth: 1 }}>
                            <Text>{index + 1}</Text>
                        </View>
                    </Marker>
                ))}
                <Polyline
                    coordinates={coordinates}
                    strokeColor="red"
                    strokeWidth={6}
                />
            </MapView>
        </View>
    );
};

export default MultiplePointsMap;