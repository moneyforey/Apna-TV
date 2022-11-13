import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ModalUsers from "./ModalUsers";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  
  const { isOpen, onOpen, onClose } = useDisclosure();


  const getUsers = async () => {
    let res = await axios.get("https://zeebackend-production.up.railway.app/movieadmin/users");
    console.log(res.data);
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUsers = async (id) => {
    let res = await axios.delete(
      `https://zeebackend-production.up.railway.app/movieadmin/users/${id}`
    );
    getUsers();
  };

  return (
    <>
      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>PROFILE PICTURE</Th>
                <Th>USERNAME</Th>
                <Th>EMAIL ID</Th>
                <Th>EDIT</Th>
                <Th>REMOVE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((u) => {
                return (
                  <Tr key={u._id}>
                    <Td>
                      <Image
                        width={"30px"}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpNhbncgYSuUbHYYWgWHrk5rGNyUmVPwtLA&usqp=CAU"
                      />
                    </Td>
                    <Td>{u.name}</Td>
                    <Td>{u.email}</Td>
                    <Td>
                      <Link to={`/admin/allUsers/update/${u._id}`}>
                      <Button >Update</Button>
                      </Link>
                     
                    </Td>
                    <Td>
                      <Button onClick={() => deleteUsers(u._id)}>Delete</Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
     
      </Box>
    </>
  );
};

export default AdminUsers;
