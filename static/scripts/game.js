function createNewspaper() {
    newspaperText.innerText = backend.plot.description
    newspaperPicture.style.backgroundImage = `url('static/assets/tokens/character/dead_man1.png')`

    setFloating(newspaper)
}

playButton.onclick = async function() {
    if (backend.model.API_KEY === '')
    {
        setSubtitle('An api key is required to play this game!')
        return
    }

    setView(Views.EMPTY)
    setSubtitle('Generating scenario... This will take around 30 seconds.')

    await generateGame()

    setView(Views.GAME)
    
    createGame()
    createNewspaper()
    createTestimony()

    playSound(Sounds.BACKGROUND, 0.01)

    gameRunning = true
}

document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space')
        return

    if (document.activeElement.tagName === 'INPUT')
        return
    
    if (currentView.name === Views.GAME.name)
        setView(Views.BOARD)
    else if (currentView.name === Views.BOARD.name)
        setView(Views.GAME)
})

addViewCallback(Views.GAME, () => {
    setSubtitle('QUESTION SUSPECTS !')
    playSound(Sounds.WOOSH)
})

addViewCallback(Views.BOARD, () => {
    setSubtitle('SOLVE THE MYSTERY !')
    playSound(Sounds.WOOSH)
})