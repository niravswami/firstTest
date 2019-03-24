<template>
    <div>
        <v-container v-bind="{ [`grid-list-sm`]: true }" fluid>
          <v-layout wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
            >
              <v-card  tile>
                <v-list >
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Electronics</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Moblie</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Tape</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>


