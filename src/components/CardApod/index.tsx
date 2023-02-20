import { FC, memo, useCallback, useState } from 'react'
import Title from './Title'
import Date from './Date'
import { Props } from './type'
import Url from './Url'
import {
  Content,
  ContentButtons,
  DeteleApod,
  FavContainer,
  FavImg,
} from './styles'
import hearth from './assets/icons8-favorite-96.png'
import hearthFilled from './assets/icons8-favorite-96-filled.png'
import { deleteApod } from '../../services/api/apod'
import { addFavApod } from '../../services/api/user'

const CardApod: FC<Props> = ({ apod, onRemove }) => {
  const [isFavorited, setIsFavorited] = useState(apod.isFav)

  const handleDeleteApod = useCallback(
    async (id: string) => {
      await deleteApod(id)
      onRemove(id)
    },
    [onRemove]
  )

  const handleAddFavApod = useCallback(async (id: string) => {
    const isAdded = await addFavApod(id)
    setIsFavorited(isAdded) // Aquí establecemos el estado a verdadero
  }, [])

  return (
    <Content>
      <Title title={apod.title} />
      <Url url={apod.url} />
      <Date date={apod.date} />
      <ContentButtons>
        <DeteleApod
          type="button"
          onClick={() => {
            handleDeleteApod(apod.id)
          }}
        >
          Delete
        </DeteleApod>
        <FavContainer
          onClick={() => {
            handleAddFavApod(apod.id)
          }}
        >
          <FavImg src={isFavorited ? hearthFilled : hearth} />
        </FavContainer>
      </ContentButtons>
    </Content>
  )
}

export default memo(CardApod)
