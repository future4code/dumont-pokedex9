export const goBack = (history) => {
    history.goBack()
}

export const goHomePage = (history) => {
    history.push("/")
}

export const goPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goDetailPage = (history) => {
    history.push("/detalhes")
}