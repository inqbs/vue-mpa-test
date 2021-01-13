<template>
    <div>
        <Board src="http://localhost:5000/test/data" />
    </div>
</template>

<script>
import Board from '../components/Board'

export default {
    name: 'ServerPagination',
    components:{
        Board
    }
}
</script>

<style>

</style>
