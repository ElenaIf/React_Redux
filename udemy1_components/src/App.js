import React from "react";

// importing faker for the avatar photos
import faker from "faker";

// importing components
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
	return (
		<div className="ui container comments">
			<SeasonDisplay />
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at 4:56 PM"
					commentText="Cool blog post, thanks!"
					photo={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 2:00 PM"
					commentText="I totally agree with you"
					photo={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Yesterday at 12:30 PM"
					commentText="Year same here..."
					photo={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

export default App;
