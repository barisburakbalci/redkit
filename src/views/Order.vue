<template>
  <div class="form">
    <div class="row">
      <label for="product">Ürün</label>
      <select id="product" ref="product" v-model="productId">
        <option
          v-for="product in products"
          :key="`product-${product.num}`"
          :value="product.num"
        >
          {{ product.name }}
        </option>
      </select>
    </div>
    <div class="row">
      <label for="amount">Adet</label>
      <input type="number" id="amount" v-model="amount" />
    </div>
    <div class="row">
      <div class="increment-buttons">
        <div class="decrease" @click="decreaseAmount">-</div>
        <div class="increase" @click="increaseAmount">+</div>
      </div>
    </div>
    <div class="row">
      <div @click="add" class="button">Ekle</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data: () => ({
    amount: 1,
    productId: 1,
  }),
  computed: {
    products() {
      return [...this.$store.state.products].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },
  },
  methods: {
    add() {
      const data = {
        deskNum: Number(this.$route.params.id),
        productNum: Number(this.productId),
        amount: Number(this.amount),
      };
      this.$store.dispatch("createOrder", data);
      this.$router.go(-1);
    },
    increaseAmount() {
      this.amount++;
    },
    decreaseAmount() {
      this.amount--;
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  padding: 1em;
}
select,
input {
  padding: 0.5em;
}
.button {
  text-align: center;
  padding: 1em;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgba(63, 89, 236, 0.61);
  cursor: pointer;
}
.increment-buttons {
  display: flex;
  gap: 1em;
  div {
    padding: 0.5em;
    font-size: x-large;
    border: 1px solid black;
    text-align: center;
    flex: 1;
    &.increase {
      background-color: rgba(0, 128, 0, 0.5);
    }
    &.decrease {
      background-color: rgba(255, 0, 0, 0.5);
    }
  }
}
</style>
