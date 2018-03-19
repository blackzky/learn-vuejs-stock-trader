<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <b-card
            bg-variant="primary"
            text-variant="white"
            header="Primary"
            class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            bg-variant="secondary"
            text-variant="white"
            header="secondary"
            class="text-center">
            <p class="card-text">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            bg-variant="success"
            text-variant="white"
            header="Success"
            class="text-center">
            <p class="card-text">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <hr>

    <b-container>
      <b-row>
        <b-col>
          <b-card
            border-variant="primary"
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            border-variant="secondary"
            header="Secondary"
            header-border-variant="secondary"
            align="center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            border-variant="success"
            header="Success"
            align="center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <div class="text-center my-3">
      <b-btn
        v-b-tooltip.hover
        title="I'm a tooltip!">Hover Me</b-btn>
    </div>

    <b-container>
      <b-row>
        <b-col>
          <b-alert
            show
            variant="primary">Primary Alert</b-alert>
        </b-col>
        <b-col>
          <b-alert
            show
            variant="secondary">Secondary Alert</b-alert>
        </b-col>
        <b-col>
          <b-alert
            show
            variant="success">Success Alert</b-alert>
        </b-col>
      </b-row>
    </b-container>

    <hr>

    <b-container>
      <b-row>
        <b-col>
          <b-button variant="primary">Button</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-primary">Button</b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-success">Button</b-button>
        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
