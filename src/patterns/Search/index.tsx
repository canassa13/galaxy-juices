import Input from '../../components/formElements/Input';

interface Search {
    borderColor?: string;
}

const Search: React.FC<Search> = ({ borderColor = 'white' }) => {
    return (
        <Input
            color="white"
            border="1px solid"
            borderColor={borderColor}
            placeholder="busque aqui seu produto"
            maxW="500px"
            _focus={{ borderColor: 'gray.500' }}
            _hover={{ borderColor: 'gray.500' }}
        />
    );
};

export default Search;
