import Link from 'next/link'

const Land = ({ currentUser, tickets }) => {
  const ticketList = tickets.map(ticket => {
    return (
      <tr id={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>view</a>
          </Link>
        </td>
      </tr>
    )
  })

 return (
   <div>
     <h1>Tickets</h1>
     <table className="table">
       <thead>
         <tr>
           <th>Title</th>
           <th>Price</th>
           <th>Link</th>
         </tr>
       </thead>
       <tbody>
         {ticketList}
       </tbody>
     </table>
   </div>
 )
}

// runs during initial rendering of the component
Land.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets')
  return { tickets: data }
}

export default Land