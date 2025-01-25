/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex } from "antd";
const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

const BlogCard = ({ blog }: any) => {
  //   console.log(blog);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (blog) {
      setLoading(false);
    }
  }, [blog]);

  const date = new Date(blog.createdAt);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <Flex gap="middle" align="start" justify="center">
      <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
        <Card.Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title={blog.title}
          description={
            <>
              <p>Author: {blog?.author?.name}</p>
              <p>Publish at: {formattedDate}</p>
            </>
          }
        />
      </Card>
    </Flex>
  );
};

export default BlogCard;
