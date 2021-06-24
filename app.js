const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      // formula for calculating a random number between 12 and 5
      const attackValue = Math.floor(Math.random() * (12 - 5) + 5);
      this.monsterHealth -= attackValue;
    },
  },
});

app.mount("#game");
