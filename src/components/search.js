// import * as React from 'react';
// import { Searchbar } from 'react-native-paper';

// const MyComponent = () => {
//   const [searchQuery, setSearchQuery] = React.useState('');

//   const onChangeSearch = query => setSearchQuery(query);

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//     />
//   );
// };

// export default MyComponent;



import React, {useState} from 'react';
import { Table, Button, Container } from "react-bootstrap";
import BookDataService from "../services/receiptservices";



const SearchBar = () => {
 const [searchInput, setSearchInput] = React.useState('');
 const [books, setBooks] = useState([]);

 
   const getSingleBook = async (id) => {
        console.log(id);
     const data = await BookDataService.getReceipt(id);
     console.log(data.docs);
     // setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   };

   
 
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

return <div>
     <Container style={{height:10 }}>
   </Container>
<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
   <Container style={{height:10 }}>
   </Container>
   <Button variant="primary" className="search"  onClick={(e) => getSingleBook(searchInput)}
   >    Search  </Button>

   
</div>
};
export default SearchBar;