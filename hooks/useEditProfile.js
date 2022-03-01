import {useState, useRef, useEffect} from 'react';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {API_URL, apiRoutes} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {setAuth} from '../redux/actions/actions';

const useEditProfile = navigation => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const [editProfileLoader, setEditProfileLoader] = useState(false);
  const isFocused = useIsFocused();
  const passwordIconRef = useRef(false);
  const userInfo = useSelector(state => state.userInfo);
  const [initialValue, setInitialValue] = useState();
  const changePasswordInputIcon = () => {
    passwordIconRef.current = passwordIcon;
    passwordIconRef.current === 'eye'
      ? setPasswordIcon('eye-off')
      : setPasswordIcon('eye');
  };

  const signupValidationSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    address: yup.string().required('Required'),
    city: yup.string().required('Required'),
    state: yup.string().required('Required'),
    country: yup.string().required('Required'),
    zipCode: yup.number().typeError('Number Required').required('Required'),
    mobileNumber: yup
      .number()
      .typeError('Number Required')
      .required('Required'),
  });
  //  form submission

  const handleEditProfile = async values => {
    let newValues = {
      firstname: values.firstName,
      lastname: values.lastName,
      address: values.address,
      city: values.city,
      state: values.state,
      country: values.country,
      zipcode: values.zipCode,
      mobilephone: values.mobileNumber,
    };

    try {
      setEditProfileLoader(true);
      const response = await axios.put(
        `${API_URL}${apiRoutes.users}${userInfo.id}`,
        newValues,
        {
          headers: {Authorization: `Bearer ${userInfo.authToken}`},
        },
      );
      if (response.status === 200) {
        setEditProfileLoader(false);

        dispatch(
          setAuth({
            authToken: userInfo.authToken,
            firstName: response.data.firstname,
            lastName: response.data.lastname,
            email: response.data.email,
            id: response.data.id,
          }),
        );
        Alert.alert(
          'Congratulations',
          'Profile Updated Successfully',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('Store Screen'),
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    } catch (error) {
      setEditProfileLoader(false);
      if (error) {
        Alert.alert(
          'Error',
          `${error.response.data.message}`,
          [
            {
              text: 'Ok',

              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    }

    // navigation.navigate('Main App');
  };

  const handleGetUserData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}${apiRoutes.users}${userInfo.id}`,

        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        },
      );
      if (response.status === 200) {
        setIsLoading(false);

        setInitialValue({
          firstName: response.data.user.firstname,
          lastName: response.data.user.lastname,
          address: response.data.user.address,
          city: response.data.user.city,
          state: response.data.user.state,
          country: response.data.user.country,
          zipCode: response.data.user.zipcode,
          mobileNumber: response.data.user.mobilephone,
        });
      }
    } catch (error) {
      setIsLoading(false);
      if (error) {
        Alert.alert(
          'Error',
          `${error.response.data.message}`,
          [
            {
              text: 'Ok',

              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    }
  };

  useEffect(() => {
    handleGetUserData();
  }, [isFocused]);

  return {
    passwordIcon,
    signupValidationSchema,

    editProfileLoader,

    isLoading,
    handleEditProfile,
    changePasswordInputIcon,
    initialValue,
  };
};

export default useEditProfile;
