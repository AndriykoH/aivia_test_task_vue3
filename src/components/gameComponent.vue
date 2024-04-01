<template>
  <v-container>
    <div>
      <v-row no-gutters justify="center" style="margin-top: 30px">
        <v-card color="white" style="padding: 20px" width="800px">
          <v-row no-gutters align="center">
            <v-text-field
              variant="outlined"
              label="Size X"
              v-model="sizeX"
              class="mr-2"
            />
            <v-text-field
              variant="outlined"
              label="Size Y"
              v-model="sizeY"
              class="ml-2"
            />
          </v-row>
        </v-card>
      </v-row>
      <v-row no-gutters justify="center" style="margin-top: 24px">
        <div class="positionRow">
          <div
            v-for="(row, y) in parseInt(sizeY)"
            :key="y"
            class="positionRow"
          >
            <div
              v-for="(col, x) in parseInt(sizeX)"
              :key="x"
              class="positionCard"
              @mouseover="toggleColor(y, x)"
              :style="{ backgroundColor: grid[y][x] }"
            ></div>
          </div>
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const sizeX = ref(0);
    const sizeY = ref(0);
    const grid = ref([]);

    const initializeGrid = () => {
      grid.value = [];
      for (let i = 0; i < parseInt(sizeY.value); i++) {
        let row = [];
        for (let j = 0; j < parseInt(sizeX.value); j++) {
          row.push("white");
        }
        grid.value.push(row);
      }
    };

    const toggleColor = (y, x) => {
      grid.value[y][x] = grid.value[y][x] === "white" ? "blue" : "white";
    };

    watchEffect(() => {
      initializeGrid();
    });

    return {
      sizeX,
      sizeY,
      grid,
      toggleColor,
    };
  },
};
</script>

<style scoped>
.positionCard {
  width: 36px;
  height: 36px;
  margin: 2px;
  display: inline-block;
}

.positionRow {
  white-space: nowrap;
}
</style>
