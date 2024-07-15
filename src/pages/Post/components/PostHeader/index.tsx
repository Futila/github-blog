import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../../Home'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { Spinner } from '../../../../components/Spinner'




interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}


export function PostHeader({isLoading, postData}: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }


  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
    {isLoading ? (
      <Spinner/>
    ): <>
        <header>
        <ExternalLink
          /* as="button" */
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="iconLeft"
          text="Voltar"
        />
        <ExternalLink text="Ver no Github" href={postData.html_url} target="_blank" />
      </header>

      <h1>{postData.title}</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
         {postData.user.login}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
         {formattedDate}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />{postData.comments} comentários
        </li>
      </ul>
    
    </>
  }
    </PostHeaderContainer>
  )
}
