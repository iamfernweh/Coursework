export default function ContactRow({ contact }) {
    return(
        <tr>
            <td>{contact.name}</td>
            <td>{contact.row}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}