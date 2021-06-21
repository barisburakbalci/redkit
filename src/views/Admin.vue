<template>
  <div class="admin-page">
    <div>
      <div v-for="product in products" :key="`product-${product.num}`">
        <input type="text" :value="product.name" :ref="`pname-${product.id}`" />
        <input
          type="number"
          :value="product.price"
          :ref="`pprice-${product.id}`"
          step="0.25"
        />
        <button @click="updateProduct(product.id)">Güncelle</button>
      </div>
      <div>
        <input type="text" ref="newProductName" placeholder="İsim" />
        <input type="number" ref="newProductPrice" placeholder="Fiyat" />
        <button @click="addProduct">Ürün Ekle</button>
      </div>
    </div>
    <div>
      <div v-for="desk in desks" :key="`desk-${desk.num}`">
        Masa {{ desk.num }}
      </div>
      <button @click="addDesk">Masa Ekle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
  computed: {
    desks() {
      return [...this.$store.state.desks].sort((a, b) => a.num - b.num);
    },
    products() {
      return [...this.$store.state.products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
  },
  methods: {
    addProduct() {
      const data = {
        name: this.$refs["newProductName"].value.toCapitalized(),
        price: Number(this.$refs["newProductPrice"].value),
      };
      this.$refs["newProductName"].value = "";
      this.$refs["newProductPrice"].value = "";
      this.$store.commit("addProduct", data);
    },
    addDesk() {
      this.$store.commit("addDesk");
    },
    updateProduct(id) {
      const data = {
        id,
        name: this.$refs["pname-" + id].value.toCapitalized(),
        price: Number(this.$refs["pprice-" + id].value),
      };
      this.$store.commit("updateProduct", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-page {
  display: flex;
  height: 100vh;
  padding: 2em;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      display: flex;
      flex: 1;
    }
  }
  button {
    margin: 1em;
    min-width: 12ch;
  }
}
</style>
