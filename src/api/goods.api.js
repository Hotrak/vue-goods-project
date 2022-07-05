import goods from '../assets/goods.json';
import goodsCategory from '../assets/goodsCategory.json';

const getGoods = () => {
    const formattedGoods = goods.Value.Goods.map(item => {
        
        const category = goodsCategory[item.G];

        const name = category.B[item.T]?.N;

        return {
            id: item.T,
            count: item.P,
            price: item.C,
            categoryId: item.G,
            categoryName: category?.G,
            name,
        };
    });


    return formattedGoods;
}

const getCategories = () => {
    const result = []; 

    for(let key in goodsCategory){
        
        const category = goodsCategory[key];

        result.push({
            id: key,
            name: category.G,
        })
    }

    return result;
}

export default { getGoods, getCategories };