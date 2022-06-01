import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
    AppForm as Form,
    AppFormField as FormField,
    AppSubmitButton as SubmitButton,
    AppFormPicker as Picker,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listings from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Select atleast one image"),
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

const ListingEditScreen = () => {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState();

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const response = await listings.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if (!response.ok) {
            setUploadVisible(false);
            return alert("Could not save the data.");
        }

        resetForm();
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen
                visible={uploadVisible}
                progress={progress}
                onDone={() => setUploadVisible(false)}
            />
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={(values, formikBag) =>
                    handleSubmit(values, formikBag)
                }
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField maxLength={255} name="title" placeholder="Title" />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <Picker
                    icon="apps"
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    width="50%"
                />

                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    placeholder="Description"
                    numberOfLines={3}
                />

                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default ListingEditScreen;
