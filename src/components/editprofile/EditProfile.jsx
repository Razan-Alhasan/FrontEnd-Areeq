import { useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./EditProfile.css";
import ARButton from "../ARButton/ARButton";
import Avatar from "@mui/material/Avatar";
import { getUserById, updateUser } from "../../api/userApi";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [state, setState] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { userId } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(userId);
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("email", user.email);
        setValue("link", user.link);
        setValue("description", user.description);
        setState(user);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId, setValue]);

  const handleFormSubmit = async (data) => {
    try {
      const updatedUser = {
        ...state,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        link: data.link,
        description: data.description,
      };
      const response = await updateUser(userId, updatedUser);
      console.log("User updated successfully:", response);
      navigate(`/FrontEnd-Areeq/seller/${userId}`);
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  };

  return (
    <div className=" container-edit m-auto my-4 myborder p-5 rounded">
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="Avatar">
          <Avatar
            size={150}
            round="true"
            src="https://thumbs.dreamstime.com/b/add-user-icon-vector-people-new-profile-person-illustration-business-group-symbol-male-195158118.jpg"
            alt="User Avatar"
          />
        </div>
        <a className="A" href="#" onClick={handleUploadClick}>
          Change Your Picture
        </a>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <div className="form-fields">
          <div className="form-field">
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <OutlinedInput
              fullWidth
              id="firstName"
              name="firstName"
              {...register("firstName")}
              error={errors.firstName ? true : false}
              label="First Name"
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-field">
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastName"
              name="lastName"
              {...register("lastName")}
              error={errors.lastName ? true : false}
              label="Last Name"
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </div>
          <div className="form-field">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              error={errors.email ? true : false}
              label="Email"
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="form-field">
            <InputLabel htmlFor="link">Link</InputLabel>
            <OutlinedInput
              fullWidth
              id="link"
              name="link"
              autoComplete="link"
              {...register("link", {
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid link format",
                },
              })}
              error={errors.link ? true : false}
              label="Link"
            />
            {errors.link && (
              <span className="error-message">{errors.link.message}</span>
            )}
          </div>
          <div className="form-field">
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput
              fullWidth
              id="description"
              name="description"
              multiline
              rows={4}
              {...register("description")}
              error={errors.description ? true : false}
              label="Description"
            />
            {errors.description && (
              <span className="error-message">
                {errors.description.message}
              </span>
            )}
          </div>
        </div>

        <br></br>
        <div className="button">
          <ARButton text={"Save"} onClick={handleSubmit(handleFormSubmit)} />
          <br></br>
          <br></br>
          <Link to={`/FrontEnd-Areeq/editpass`}>
            <ARButton text={"Change Your Password"} />{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}
export default EditProfile;
