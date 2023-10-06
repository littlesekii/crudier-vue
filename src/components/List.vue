<script async setup>
import {onMounted, reactive} from 'vue';

import PersonController from '../core/controller/PersonController';
import Person from '../core/model/Person';

const person = reactive({
    list: []
});

onMounted(async () => {
    let res = await PersonController.findPerson();   

    person.list = res.data.map(element => 
        Person.new(
            element.id,
            element.name,
            element.register
        )
    );

    console.log(person.list);
});

</script>

<template>
    <div class="component">
        <ul class="list">
            <li class="list-item">                 
                <div class="list-item-container">
                    <div class="bolded">ID</div>
                    <div class="bolded">Name</div>
                    <div class="bolded">Register</div>
                </div>
            </li>
            <li class="list-item" v-for="(person, index) in person.list"> 
                <div class="list-item-container">
                    <div>{{ person.id }}</div>
                    <div>{{ person.name }}</div>
                    <div>{{ person.register }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

    .component {
        margin-top: 1em;
        /* background-color: aliceblue; */
    }
    .list {
        /* background-color: aquamarine; */
        
        padding: 0;

        list-style: none;
    }

    .list-item {
        /* display: flex; */
    }
    .list-item-container {
        display: flex;

        border-bottom: 1px solid var(--color-border);

        padding: 10px 20px;
    }

    .list-item-container div {
        flex: 1;       
        text-align: left;
    }

</style>