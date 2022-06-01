import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView
                horizontal={true}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
                ref={scrollView}
            >
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onImageChange={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}

                    <ImageInput onImageChange={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        marginRight: 10,
    },
});

export default ImageInputList;
