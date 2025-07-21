import axios from "axios"

interface UploadFileToStorageParams {
    file: File,
    onProgress: (sizeInBytes: number) => void
}

interface UploadFileToStorageResponse {
    url: string
}

interface UploadFileToStorageOpts {
    signal?: AbortSignal
}

export async function uploadFileToStorage(
    { file, onProgress }: UploadFileToStorageParams, 
    opts?: UploadFileToStorageOpts,
): Promise<UploadFileToStorageResponse> {

    const data = new FormData()
    data.append('file', file)

    const response = await axios.post('http://localhost:3333/uploads', data, {
        headers: {
            'Content-Type': 'multip,art/form-data'
        },
        signal: opts?.signal,
        onUploadProgress(progressEvent) {
            onProgress(progressEvent.loaded)
        },
    })

    return { url:  response.data.url } 

}