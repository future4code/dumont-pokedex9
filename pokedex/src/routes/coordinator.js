export const goBack = (history) => {
    history.goBack()
}

export const goHomePage = (history) => {
    history.push("/")
}

export const goPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goDetailPage = (history, name) => {
    history.push(`/detalhes/${name}`)
}