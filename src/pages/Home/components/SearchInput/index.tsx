import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { SeacrhInputContainer } from './styles'


const searchFormSchema = z.object({
  query: z.string()
})


type SearchFormInput = z.infer<typeof searchFormSchema>


interface SearchInputProps {
  postsLength: number;
  getPosts: (query?:string) => Promise<void>
}

export function SearchInput({getPosts, postsLength}: SearchInputProps) {
  const {register, handleSubmit} = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })


  async function handleSearchPosts (data: SearchFormInput) {
    await getPosts(data.query)
  }
  return (
    <SeacrhInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>

        <span>{postsLength} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SeacrhInputContainer>
  )
}
