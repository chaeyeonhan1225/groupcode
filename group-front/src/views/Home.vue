<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <group-make-card></group-make-card>
            </v-col>
            <v-col cols="12" md="4">
                <group-card></group-card>
            </v-col>
            <v-col cols="12" md="4">
                <group-card></group-card>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import GroupMakeCard from '@/components/GroupMakeCard';
import GroupCard from '@/components/GroupCard';

export default {
    components: {
        GroupMakeCard,
        GroupCard
    },
}
</script>