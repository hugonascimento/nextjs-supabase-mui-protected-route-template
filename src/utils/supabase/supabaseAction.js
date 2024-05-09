'use server'
// External libraries
import 'server-only'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
// Internal libraries/utilities
import { createClient } from '@/utils/supabase/server'
// Components
//
// Stylesheets
//

// For Side Menu history
export async function getMessages(id) {
    if (!id) {
        return []
    }
    try {
        const supabase = createClient()
        const { data } = await supabase
            .from('chats')
            .select('payload')
            .order('payload->createdAt', { ascending: false })
            .eq('user_id', id)
            .throwOnError()

        return data?.map((entry) => entry.payload) ?? []
    } catch (error) {
        return []
    }
}

// For view chat or dev mode
export async function getMessage(id) {
    const supabase = createClient()
    const { data } = await supabase
        .from('chats')
        .select('payload')
        .eq('id', id)
        .maybeSingle()

    return data?.payload ?? null
}

// For remove chat in chat or dev mode
export async function removeMessage({ id, path }) {
    try {
        const supabase = createClient()
        await supabase.from('chats').delete().eq('id', id).throwOnError()

        revalidatePath('/')
        return revalidatePath(path)
    } catch (error) {
        return {
            error: 'Unauthorized',
        }
    }
}

// For delete all messages?
export async function clearMessages() {
    try {
        const supabase = createClient()
        await supabase.from('chats').delete().throwOnError()
        revalidatePath('/')
        return redirect('/')
    } catch (error) {
        console.log('clear chats error', error)
        return {
            error: 'Unauthorized',
        }
    }
}

// For get shared Messages in chat or dev mode
export async function getSharedMessage(id) {
    const supabase = createClient()
    const { data } = await supabase
        .from('chats')
        .select('payload')
        .eq('id', id)
        .not('payload->sharePath', 'is', null)
        .maybeSingle()

    return data?.payload ?? null
}

// For share Messages in chat or dev mode
export async function shareMessage(chat) {
    const payload = {
        ...chat,
        sharePath: `/shared/${chat.id}`,
    }

    const supabase = createClient()
    await supabase
        .from('chats')
        .update({ payload: payload })
        .eq('id', chat.id)
        .throwOnError()

    return payload
}

// For Edit shared Messages in chat or dev mode
export async function uptSharedMessage({ updtChat }) {
    const payload = {
        ...updtChat,
    }
    console.log('server: ', 'updtChat')
    try {
        const supabase = createClient()
        await supabase
            .from('chats')
            .update({ payload: payload })
            .eq('id', updtChat.id)
            .throwOnError()
    } catch (error) {
        console.log('uptSharedMessage: ', error)
    }
    return payload
}

//GET PROFILE FROM HERE?
