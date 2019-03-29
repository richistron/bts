BTS -> INE like app
===================

Fake INE app. Single page app, bundled with webpack,
powered by React.

# Installation

```bash
node -v # v10.15.3
```

#### NVM

If you are an nvm user, try this:

```bash
nvm install
nvm use

```

#### Yarn

```bash
npm i -g yarn
```

#### Npm packs

```bash
yarn install
```

# Usage

Makefile available tasks: 

- pack: creates docker image
- run: runs docker container port: **4000**
- stop: stops container
- push: push new image to docker registry
- lint: quality lint tool
- test: quality test tool

Example:
```bash
make test
make lint
make pack
```

# User story

```
Estas encargado de crear una aplicacion que se encargara' de ingresar datos al 
padron electoral del INE. 
```

### Home view

- User list field:
  - Nombre
  - Apellido Paterno
  - Apellido Materno
  - Fecha de Nacimiento
  - Ciudad de nacimiento
  - Estado de nacimiento
  - Sexo
  
- Add edit link (send them to edit view)
- Add delete button
- Add new user button
  - show new user form when it's active

### User create view

- Field `Sexo` needs to be a `radio` input
- `Estado de nacimiento` most be a `select` input
- `Ciudad nacimiento` most be a `select` input
- Form validation
- Cancel button
  
### User edit view 

- Edit form

