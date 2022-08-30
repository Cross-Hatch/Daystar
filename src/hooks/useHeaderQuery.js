import { useStaticQuery, graphql } from "gatsby"

const useHeaderQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wpMediaItem {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, width: 100)
            id
          }
        }
      }
    }
  `)
  return data
}

export default useHeaderQuery
