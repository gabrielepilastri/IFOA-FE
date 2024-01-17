import { useState, useEffect } from 'react';
import Gelato from './Gelato';

class Menu extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            isError: false,
            products: [],
            filteredProducts: [],
            selected: 0,
            categories: [],
        };
    }

    filtraProdotti = (category, index) => {
        this.setState({selected: index});

        if (category === "tutti") {
            this.setState({filteredProducts: this.state.products});
        } else {
            const prodottiFiltrati = this.state.products.filter((el) => el.categoria === category ? el : "");
            this.setState({filteredProducts: prodottiFiltrati});
        }
    };

    componentDidMount() {
        const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

        this.setState({isLoading: true, isError: false});

        fetch(url) 
        .then((response) => response.json())
        .then((prod) => {
            this.setState({
                products: prod.data,
                filteredProducts: prod.data,
            });

            const categories =  Array.from(
                new Set(prod.data.map((pr) => pr.categoria)));
                categories.unshift("Tutti");
                this.setState({categories});
                this.setState({isLoading : false});
                console.log(this.state.products);
        })
    }
}