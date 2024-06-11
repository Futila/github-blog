import { SeacrhInputContainer } from './styles'

export function SearchInput() {
  return (
    <SeacrhInputContainer>
      <header>
        <h3>Publicações</h3>

        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </SeacrhInputContainer>
  )
}
