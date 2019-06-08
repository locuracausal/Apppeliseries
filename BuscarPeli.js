import {Component} from 'react';
import img from '../ImgPelis/not-found.jpg';

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=";
const apiKey = "9392e084";

class BuscarPeli extends Component{

    createData(item,idArray) 
    {

        if (item.Poster === "N/A")
        {
            return { 
                id: idArray,
                img : img,
                title: item.Title,
                author: item.Year, 
                    
                };
        }
        else
        {
            return {  
           
            id: idArray,
            img: item.Poster,
            title: item.Title,
            author: item.Year,     
            };
        }
    }
    // porque esta estructura de dato no la definiste?

    invocarPeliculas(title,okBusqueda,failBusqueda)
    {
        const endpoint = `${url}${apiKey}&s=${title}`;
        console.log("Buscando todas las peliculas")
        fetch(endpoint
        ).then ((response) => {
            
            return response.json();
        }).then (responseData => {
            try {console.log("response peliculas",responseData);
            console.log(responseData.Response);
            if(responseData.Response == 'True'){
                    
                console.log('entre al if');
                var i,newArray = [];
                for (i = 0; i < responseData.Search.length; i++) 
                {
               
                                
                  newArray.push(this.createData(responseData.Search[i],i));
                
                
                }
                okBusqueda(newArray)      
            }
                
            } catch (error) { console.log(error);
                
            }
            console.log('Antes de invocar okBusqueda :', newArray)

            
          
        });
    }

    invocarPeliculas(title,okBusqueda,failBusqueda)
    {
        const endpoint = `${url}${apiKey}&s=${title}`;
        console.log("Buscando todas las peliculas")
        fetch(endpoint
        ).then ((response) => {
            
            return response.json();
        }).then (responseData => {
            try {console.log("response peliculas",responseData);
            console.log(responseData.Response);
            if(responseData.Response == 'True'){
                    
                console.log('entre al if');
                var i,newArray = [];
                for (i = 0; i < responseData.Search.length; i++) 
                {
               
                                
                  newArray.push(this.createData(responseData.Search[i],i));
                
                
                }
                okBusqueda(newArray)      
            }
                
            } catch (error) { console.log(error);
                
            }
            console.log('Antes de invocar okBusqueda :', newArray)

            
          
        });
    }
    
    invocar(title,okBusqueda)
    {
        const endpoint = `${url}${apiKey}&t=${title}`;
        console.log("Buscando")
        fetch(endpoint
        ).then ((response) => {
            
            return response.json();
        }).then (responseData => {
            console.log(responseData);
            
                console.log("Entre");
                const {Title,Genre,Poster}= responseData;
                const newData = {Title: Title, Genre: Genre, Poster: Poster};
            console.log(newData);
                okBusqueda(newData)
          
          
          
        });
    }
}
export default new BuscarPeli();




