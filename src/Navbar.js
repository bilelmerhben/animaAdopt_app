
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">AnimaAdopt</a>
          
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link" href="/">Acceuil</a>
                </li>
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/services" id="navbarDropdown" 
          role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/service1">Service1</a></li>
            <li><a class="dropdown-item" href="/service2">Service2</a></li>
            <li><a class="dropdown-item" href="/service3">Service3</a></li>
          </ul>
               </li>
               <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/associations" id="navbarDropdown" 
          role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Associations
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/association1">Association1</a></li>
            <li><a class="dropdown-item" href="/association2">Association2</a></li>
            <li><a class="dropdown-item" href="/association3">Association3</a></li>
          </ul>
               </li>

            
                <li class="nav-item">
                  <a class="nav-link" href="/inscription" >S'inscrire</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">English</a>
                </li>
              </ul>
              {/*<form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              */}
              </div>
          </div>
        </nav>
      </div>
    )
  }
}
