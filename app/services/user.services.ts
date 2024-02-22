interface FetchConfigOptions {
  cache?: RequestCache
  next?: NextFetchRequestConfig
}
/** Get   Data `GET: /api/` */
export const getUser = async (url: string, options?: FetchConfigOptions) => {
  try {
    const res = await fetch(`/${url}`, {
      method: 'get',
      ...options,
    })
    return { res: res, err: null }
  } catch (error) {
    return { err: error, res: null }
  }
}

export const postUser = async (data: any, url: string) => {
  try {
    const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return { res: res, err: null }
  } catch (error) {
    return { err: error, res: null }
  }
}

export const getGalleryImages = async (
  search: string,
  options?: FetchConfigOptions,
) => {
  try {
    const res = await fetch(`api/admin/gallery/?search=${search}`, {
      method: 'get',
      ...options,
    })
    return { res: res, err: null }
  } catch (error) {
    return { err: error, res: null }
  }
}
