<template>
    <h1 v-if="!pokemon">Esperando ...</h1>
    <div v-else>
        <h1>¿Quien es este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions 
            :pokemonArr="pokemonArr"
            @selection-pokemon="checkAnswer"
        />

        <ProgressBar 
            :cont="cont"
            :classesActive="classesActive"

        />


        <div v-if="showAnswer">
            <h2 class="fade-in">{{message}}</h2>
            <h3>Siguiente: {{timer}}</h3>
           <!-- <button  @click="newGame" >Nuevo juego</button>-->
        </div>
    </div>

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'
import ProgressBar from '../components/ProgressBar.vue'


   

export default {
    name: 'Pokemon Page',
    components: {
    PokemonPicture,
    PokemonOptions,
    ProgressBar
},
        data(){
            return {
                cont: 0,
                classesActive: [true, false, false, false, false],
                pokemonArr: [],
                pokemon: null,
                showPokemon: false,
                showAnswer: false,
                message: "",
                disabledOpc: false,
                timer: 5
            }
        },
        methods:{
            async mixPokemonArray (){
                this.pokemonArr = await getPokemonOptions()
                const rdnInt = Math.floor(Math.random() * 4)
                this.pokemon = this.pokemonArr[rdnInt]
            },


            checkAnswer ( selectedId ){
                if(!this.disabledOpc){
                    this.disabledOpc = true
                    

                    this.showPokemon = true
                    this.showAnswer = true
                    this.disabledOpc = true
                    this.message = selectedId === this.pokemon.id ?
                                        `Excelente`:
                                        `Oops!, era ${ this.pokemon.name}`

                    

                    const intervalId =  setInterval(()=> {
                            this.timer--
                        },1000)

                    

                    setTimeout(()=>{
                        this.cont++ // counter to increase progress bar
                        this.classActive() // 
                        this.newGame()
                        clearInterval(intervalId)
                    }, 5000)
                }
                
            },
                classActive (){
                    for (let i = 0; i < this.cont; i++) {
                        this.classesActive[i] = true;
                    }
                }
            ,
            newGame(){
                this.mixPokemonArray()
                this.showAnswer     = false
                this.showPokemon    = false
                this.pokemon        = null
                this.disabledOpc    = false
                this.timer          = 5
                this.cont = this.cont > 4? 0:this.cont

            }
        },
        mounted(){
            this.mixPokemonArray()
            
        }
}
</script>

<style>

</style>