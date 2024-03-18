import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import SubcategoryList from './SubcategoryList'; // Import SubcategoryList component
import { Box, Grid, Typography } from '@mui/material';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/categories');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Box sx={{ flexGrow: 1, paddingTop: "100px", paddingBottom: "100px",borderRadius:"50%" }}>
            <Typography sx={{ textAlign: "center" }}>Top Rated Category</Typography>
            <Grid container spacing={2}>
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
                        <CategoryCard
                            title={category}
                            // You can use a placeholder image or leave it empty
                            // based on your requirements
                            image=""
                            onClick={() => handleCategoryClick(category)}
                        />
                    </Grid>
                ))}
            </Grid>
            {selectedCategory && <SubcategoryList category={selectedCategory} />}
        </Box>
    );
};

export default CategoryList;
