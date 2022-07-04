import React, { Component } from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import PageContent from './components/PageContent'
import { ThemeProvider } from './contexts/ThemeContext'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>

    )
  }
}
