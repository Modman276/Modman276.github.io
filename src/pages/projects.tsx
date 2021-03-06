import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import styles from "../styles/pages/Comment.module.css";

const Projects = (): JSX.Element => (
	<DefaultLayout title={"My Projects"}>
		<p>
			<a className="link" href="https://github.com/PreMiD/Discord-Bot">
				Little work on the PreMiD bot
			</a>
		</p>
		<p>
			<a className="link" href="https://short.pxseu.com/">
				Url shrinker!
			</a>
		</p>
		<p>
			<a className="link" href="https://cdn.pxseu.com/">
				File uploader!
			</a>
		</p>
		<p>
			<a className="link" href="https://chat.pxseu.com/">
				Chat App!
			</a>
		</p>
		<p>
			<a className="link" href="https://dash.pxseu.com/">
				Dasboard for my apps!
			</a>
		</p>
		<p>
			<a className="link" href="https://github.com/pxseu/pxseu.com">
				This website!
			</a>
		</p>
		<p>
			<a className="link" href="https://github.com/pxseu/ZeroTwoBot">
				My own Discord bot
			</a>
		</p>
		<p className={styles.comment}>
			<i>psst these are links!</i>
		</p>
	</DefaultLayout>
);

export default Projects;
