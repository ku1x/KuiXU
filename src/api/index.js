import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';

// 辅助函数：格式化Strapi响应数据
const formatStrapiResponse = (data) => {
  if (!data) return [];
  
  // 处理集合类型
  if (Array.isArray(data)) {
    return data.map(item => ({
      id: item.id,
      ...item.attributes,
      // 处理图片URL
      ...(item.attributes.image && {
        image: `${apiUrl}${item.attributes.image.data.attributes.url}`
      })
    }));
  }
  
  // 处理单一类型
  return {
    id: data.id,
    ...data.attributes,
    // 处理图片URL
    ...(data.attributes.image && {
      image: `${apiUrl}${data.attributes.image.data.attributes.url}`
    })
  };
};

export const api = {
  // 获取项目列表
  getProjects: async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/projects?populate=*`);
      return formatStrapiResponse(response.data.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },
  
  // 获取服务列表
  getServices: async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/services?populate=*`);
      return formatStrapiResponse(response.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  },
  
  // 获取技能列表
  getSkills: async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/skills?populate=*`);
      return formatStrapiResponse(response.data.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
  },
  
  // 获取博客文章
  getBlogs: async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/blogs?populate=*`);
      return formatStrapiResponse(response.data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  },
  
  // 获取简历信息
  getResume: async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/resume?populate=*`);
      return formatStrapiResponse(response.data.data);
    } catch (error) {
      console.error('Error fetching resume:', error);
      return [];
    }
  }
}; 