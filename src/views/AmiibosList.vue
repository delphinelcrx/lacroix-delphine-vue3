<script setup>

import { onBeforeMount,ref } from 'vue'
import axios from 'axios'

const API_ALL_AMIIBOS = 'https://www.amiiboapi.com/api/amiibo/'


const amiibos = ref([])
const isDataLoading = ref(true)

onBeforeMount(async ()=>{
    console.log('ON BEFORE MOUNT')
    const allAmiibos = await axios.get(API_ALL_AMIIBOS)
    const {data,status} = allAmiibos // object destructuring FTW!
    if(status===200){
        isDataLoading.value=false
    }
    amiibos.value = data.amiibo
    console.log(data.amiibo)
})


</script>

<template>

<!-- Main -->
        <section id="main">
					<div class="container">

						<!-- Content -->
							<article class="box post">
								
								<header>
									<h2>Ma Collection</h2>
									<p>{{ amiibos.length }} amiibos</p>
								</header>
								<p>
									<table>
                                        <tr>
										  <th>Character</th>
										  <th>game Series</th>
										  <th>Action</th>
										</tr>

                                        <tr v-for="amiibo in amiibos" :key="amiibo.tail">
                                            <td>{{amiibo.character}}</td>
                                            <td>{{amiibo.gameSeries}}</td>
                                            <td ><RouterLink :to="{name:'amiibosDetails',params:{amiiboId:amiibo.tail}}"><button>voir</button></RouterLink></td>
                  
                                        </tr>

									</table>
								</p>
								
							</article>

					</div>
				</section>


</template>

<style></style>
