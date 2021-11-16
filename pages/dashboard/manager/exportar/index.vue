<template>
  <div>
    <div>
      <h1 class="title">Exportar</h1>
      <p class="subtitle pt-4">Aquí puede exportar datos generales como:</p>
    </div>

    <div class="pt-20">
      <div class="w-3/5 mx-auto mobile_w-full r-w-full">
        <div class="flex flex-row justify-between mobile_vertical flex-wrap">
          <button class="py-4 px-2" @click="exportData(categories, 'categories')">
            <CardIcon icon="category-alt" text="Categorias" />
          </button>
          <button class="py-4 px-2" @click="exportData(booksFisicos, 'booksFisicos')">
            <CardIcon icon="book-open" text="Libros Fisicos" />
          </button>
          <button class="py-4 px-2" @click="exportData(admins, 'admins')">
            <CardIcon icon="user-detail" text="Admins" />
          </button>

          <button class="py-4 px-2" @click="exportData(books, 'books')">
            <CardIcon icon="list-ul" text="Libros todos" />
          </button>
          <button class="py-4 px-2" @click="exportData(booksDigitals, 'booksDigitals')">
            <CardIcon icon="book-bookmark" text="Libros Digitales" />
          </button>
          <button class="py-4 px-2" @click="exportData(editoriales, 'editoriales')">
            <CardIcon icon="building-house" text="Editoriales" />
          </button>
        </div>
      </div>
    </div>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
    <span class="mobile_spacer"></span>
  </div>
</template>

<script>
import CardIcon from '../../../../components/cards/icon'
import XLSX from 'xlsx'

export default {
  layout: 'manager',
  components: {
    CardIcon,
  },
  data() {
    return {
      editoriales: null,
      categories: null,
      books: null,
      booksDigitals: null,
      booksFisicos: null,
      admins: null,
    }
  },
  async mounted() {
    await this.getEditorials()
    await this.getCategories()
    await this.getBooks()
    await this.getAdmins()
  },

  methods: {
    exportData(data, name) {
      const workSheet = XLSX.utils.json_to_sheet(data)
      const workBook = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(workBook, workSheet, name)
      XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' })
      XLSX.writeFile(workBook, `${name}.xlsx`)
    },
    async getEditorials() {
      const { data } = await this.$apidata({
        url: '/editorial',
        method: 'get',
      })
      let dataNameEditorials = []
      for (let editorial of data.data) {
        dataNameEditorials.push({ editorial: editorial.name })
      }
      this.editoriales = dataNameEditorials
    },
    async getCategories() {
      const category = await this.$apidata({
        url: '/categories',
        method: 'get',
      })
      this.categories = category.data.data
    },
    async getBooks() {
      const { data } = await this.$apidata({
        url: '/books',
        method: 'get',
      })

      for (let book of data.data) {
        if (
          book.type.digital.format != undefined &&
          book.type.fisico.format != undefined
        ) {
          book.type = 'Fisico y Digital'
        } else {
          if (book.type.digital.format != undefined) book.type = 'Digital'
          else book.type = 'Fisico'
        }

        book.categories = book.categories[0]
        book.images_src = book.images_src[0]
        book.details = book.details.length > 0 ? book.details[0] : "---"
        book.commentaries =
          book.commentaries[0] == undefined ? '' : book.commentaries[0]
      }
      this.books = data.data
      this.booksDigitals = data.data.filter((book) => book.type == 'Digital')
      this.booksFisicos = data.data.filter((book) => book.type == 'Fisico')
    },
    async getAdmins() {
      const { data } = await this.$manager({
        url: '/users/roles/admin',
        method: 'get',
      })
      this.admins = data.data
    },
  },
}
</script>

<style scoped>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 21px;
  /* or 87% */

  color: #000000;
}
.subtitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 21px;
  color: #8d8d8d;
}
</style>
