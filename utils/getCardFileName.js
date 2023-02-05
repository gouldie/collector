function getCardFileName(setImageId, cardNo, cardName) {
  const formattedCardNo = ('00' + cardNo).slice(-3)
  const formattedCardName = cardName
    .toLowerCase()
    .replaceAll("'", '')
    .replaceAll('.', '')
    .replaceAll('#', '')
    .replaceAll(' ', '_')

  return `${setImageId}.${formattedCardNo}.${formattedCardName}.jpg`
}

export default getCardFileName
