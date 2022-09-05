const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			people: [],
			planets:[],
			vehicles:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: (name) => {
				const { favorites } = getStore()
				if (favorites.indexOf(name) == -1) {
					setStore({ favorites: favorites.concat(name) })

				}
			},
			deleteFavorites: (name) => {
				const { favorites } = getStore()
				const newFavorites = [...favorites.filter(item => (item !== name))]
				setStore({ favorites: newFavorites })

			},

			fetchPeople: async () => {
				let res = await fetch('https://swapi.dev/api/people/');
				let data = await res.json();
				setStore({ people: data.results });

			},

			fetchPlanets: async () =>{
				let res = await fetch('https://swapi.dev/api/planets/')
				let data = await res.json();
				setStore({planets: data.results});
			},
			
			fetchVehicles: async () =>{
				let res = await fetch('https://swapi.dev/api/vehicles/')
				let data = await res.json();
				setStore({vehicles: data.results});
			},
			


		}

	};
};



export default getState;
