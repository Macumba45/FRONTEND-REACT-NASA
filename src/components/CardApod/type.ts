import { Apod } from '../../services/api/apod'

export type Props = {
  apod: Apod
  onRemove: (id: string) => void
}
