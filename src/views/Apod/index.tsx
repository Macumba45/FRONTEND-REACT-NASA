import { FC, memo, useCallback, useEffect, useState } from 'react'
import CardApod from '../../components/CardApod'
import NavBar from '../../components/NavBar'
import {
  MainApodContainer,
  ApodButton,
  ApodButtonsLink,
  ApodContainer,
  SyncApiApodContainer,
  SyncApiApodText,
  Footer,
  GoToCreateApod,
} from './styles'
import { Apod, getApods, syncApods } from '../../services/api/apod'
import { getFavsApod } from '../../services/api/user'

const Apods: FC = () => {
  const [apodData, setApodData] = useState<Apod[]>([]) // inicializar la variable apodData como array vacío
  const [isLoading, setIsLoading] = useState(false)

  const printApods = useCallback(async () => {
    let apods = await getApods() // obtener los datos de la respuesta
    const apodFavorites = await getFavsApod()
    apods = apods.map((apod) => {
      const isFav = !!apodFavorites?.find((item) => item.id === apod.id)
      return { ...apod, isFav }
    })
    setApodData(apods) // guardar los datos en la variable apodData

    return apods
  }, [])

  const syncApiApods = useCallback(async () => {
    try {
      console.log('entramos')
      setIsLoading(true)
      await syncApods()
      await printApods()
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }, [printApods])

  useEffect(() => {
    printApods()
  }, [printApods])

  const onRemove = useCallback((id: string) => {
    setApodData((prev) => prev.filter((apod) => apod.id !== id))
  }, [])

  return (
    <>
      <NavBar />
      <MainApodContainer>
        <ApodButtonsLink>
          <ApodButton onClick={syncApiApods}>Sync Apod</ApodButton>
        </ApodButtonsLink>
      </MainApodContainer>
      <SyncApiApodContainer>
        {isLoading && <SyncApiApodText>Synchronizing...</SyncApiApodText>}
      </SyncApiApodContainer>
      <ApodContainer>
        {apodData.map((apod) => {
          return <CardApod key={apod.id} apod={apod} onRemove={onRemove} />
        })}
      </ApodContainer>

      <Footer>
        <GoToCreateApod to="/apod/new">Create a new APOD</GoToCreateApod>
      </Footer>
    </>
  )
}

export default memo(Apods)
