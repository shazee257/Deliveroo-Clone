import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}>

            {/* Category Card */}
            <CategoryCard
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM21wPK-tvPdAR6Q9AgfVIqKnavz6_PJpQzg&usqp=CAU'
                title="Thai" />
            <CategoryCard
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqulGOm4TvZWVO-4Iz7I-GoR0SnuIpTDkKg&usqp=CAU'
                title="Italian" />
            <CategoryCard
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZei9DRpme7qKWnqUiaa62Lw6L2Mhzjx-AA&usqp=CAU'
                title="Chineese" />
            <CategoryCard
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM21wPK-tvPdAR6Q9AgfVIqKnavz6_PJpQzg&usqp=CAU'
                title="Asian" />
            <CategoryCard
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6cjCOjGy4bcnU6VSSmsg3ZIRL9WWa9QRYw&usqp=CAU'
                title="Sushi" />
            <CategoryCard
                imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZei9DRpme7qKWnqUiaa62Lw6L2Mhzjx-AA&usqp=CAU'
                title="Canadian" />
        </ScrollView>
    )
}

export default Categories